/*!
 * The 2023 r/place Atlas
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2023 Place Atlas Initiative and contributors
 * Licensed under AGPL-3.0 (https://2023.place-atlas.stefanocoding.me/license.txt)
 */

const baseLinkElement = document.createElement("a")
baseLinkElement.className = "btn btn-primary text-truncate"
baseLinkElement.target = "_blank"
baseLinkElement.rel = "noopener noreferrer"

const baseGroupElement = document.createElement("div")
baseGroupElement.className = "btn-group-vertical"

function createLabel(name, value, parent) {
	const nameElement = document.createElement("span")
	nameElement.className = "fw-bold"
	nameElement.textContent = name
	const valueElement = document.createElement("span")
	valueElement.textContent = value
	parent.appendChild(nameElement)
	parent.appendChild(valueElement)
	return parent
}

function createInfoListItem(name, value) {
	const entryInfoListElement = document.createElement("li")
	entryInfoListElement.className = "list-group-item"
	createLabel(name, value, entryInfoListElement)
	return entryInfoListElement
}

// mode 0 = normal
// mode 1 = entry list but none on atlas
// mode 2 = preview
function createInfoBlock(entry, mode = 0) {
	const element = document.createElement("div")
	element.className = "card mb-2 overflow-hidden shadow"

	const headerElement = document.createElement("h4")
	headerElement.className = "card-header"

	const linkElement = document.createElement("a")
	linkElement.className = "text-decoration-none d-flex justify-content-between text-body"

	let nearestPeriod = currentPeriod
	let nearestVariation = currentVariation
	if (!atlasDisplay[entry.id]) {
		[nearestPeriod, nearestVariation] = getNearestPeriod(entry, currentPeriod, currentVariation)
	}

	if (mode === 2)  {
		linkElement.href = "#" 
	} else { 
		const hash = formatHash(entry.id, nearestPeriod, nearestVariation, false, false, false)
		linkElement.href = hash
		if (mode === 0) linkElement.addEventListener('click', e => {
			e.preventDefault()
			location.hash = hash
			window.dispatchEvent(new HashChangeEvent("hashchange"))
		})
	}

	const linkNameElement = document.createElement("span")
	linkNameElement.className = "flex-grow-1 text-break"
	linkNameElement.textContent = entry.name
	headerElement.appendChild(linkElement)
	linkElement.appendChild(linkNameElement)
	linkElement.insertAdjacentHTML("beforeend", '<i class="bi bi-link-45deg align-self-center link-primary" aria-hidden="true" title="Copy direct link"></i>')
	element.appendChild(headerElement)

	const bodyElement = document.createElement("div")
	bodyElement.className = "card-body d-flex flex-column gap-3"
	element.appendChild(bodyElement)

	if (entry.description) {
		const descElement = document.createElement("div")
		descElement.id = "objectDescription"
		// Formats single line break as  br and two line breaks as a new paragraph
		let formattedDesc = entry.description.replace(/\n{2}/g, '</p><p>')
		formattedDesc = formattedDesc.replace(/\n/g, '<br>')
		descElement.innerHTML = '<p>' + formattedDesc + '</p>'
		bodyElement.appendChild(descElement)
	}

	const linkListElement = document.createElement("div")
	linkListElement.className = "d-flex flex-column gap-2"
	bodyElement.appendChild(linkListElement)

	const listElement = document.createElement("ul")
	listElement.className = "list-group list-group-flush"
	element.appendChild(listElement)

	if (entry.diff) {
		const diffElement = createInfoListItem("Diff: ", entry.diff)
		if (entry.diff === "add") {
			diffElement.className = "list-group-item list-group-item-success"
		} else if (entry.diff === "edit") {
			diffElement.className = "list-group-item list-group-item-warning"
		} else if (entry.diff === "delete") {
			diffElement.className = "list-group-item list-group-item-danger"
		}
		listElement.appendChild(diffElement)
	}

	// Entry data submitted to preview does not include center or path
	if (mode === 0) {
		const [x, y] = entry?.center
		listElement.appendChild(createInfoListItem("Position: ", `${Math.floor(x)}, ${Math.floor(y)}`))

		if (entry.path) {
			const area = calcPolygonArea(entry.path)
			listElement.appendChild(createInfoListItem("Area: ", `${area} pixels`))
		}
	}

	for (const linkConfig of externalLinksConfig) {
		if (entry.links) {
			if (entry.links[linkConfig.id]?.length) {
				const groupElement = baseGroupElement.cloneNode()
				linkListElement.appendChild(groupElement)

				entry.links[linkConfig.id].forEach(link => {
					if (!link) return
					const linkElement = baseLinkElement.cloneNode()
					linkElement.href = linkConfig.generateLink(link)

					let logoChild = document.createElement("i");
					logoChild.classList.add("bi");
					logoChild.classList.add(linkConfig.listingClass);
					logoChild.setAttribute("aria-hidden", "true");
					linkElement.appendChild(logoChild);

					linkElement.append(" " + linkConfig.generateListingName(link))
					groupElement.appendChild(linkElement)
				})
			}
		}
	}

	// Adds id footer
	const idElement = document.createElement("div")
	idElement.className = "py-1"
	createLabel("ID: ", entry.id, idElement)
	const idElementContainer = document.createElement("div")
	idElementContainer.className = "card-footer d-flex justify-content-between align-items-center"
	idElementContainer.appendChild(idElement)
	element.appendChild(idElementContainer)

	// Adds edit button only if element is not deleted
	if (mode < 2 && (!entry.diff || entry.diff !== "delete")) {
		const editElement = document.createElement("a")
		editElement.innerHTML = '<i class="bi bi-pencil-fill" aria-hidden="true"></i> Edit'
		editElement.className = "btn btn-sm btn-outline-primary"
		editElement.href = "./?mode=draw&id=" + entry.id + formatHash(false, nearestPeriod, nearestVariation, false, false, false)
		editElement.title = "Edit " + entry.name
		idElementContainer.appendChild(editElement)
	}

	// Adds giscus button
	if (entry.id >= 0) {
		const giscusButton = createGiscusButton(entry)
		idElementContainer.appendChild(giscusButton)
	}

	// Removes empty elements
	if (!bodyElement.hasChildNodes()) bodyElement.remove()
	if (!linkListElement.hasChildNodes()) linkListElement.remove()
	if (!listElement.hasChildNodes()) listElement.remove()

	return element
}

function createGiscusButton(entry) {
	const button = document.createElement("button")
	button.className = "btn btn-sm btn-outline-primary"
	button.innerHTML = '<i class="bi bi-chat-dots" aria-hidden="true"></i> Comments'
	button.addEventListener("click", () => showCommentsModal(entry))
	return button
}

function showCommentsModal(entry) {
	const modal = createModal(entry)
	document.body.appendChild(modal)
	
	const bsModal = new bootstrap.Modal(modal)
	bsModal.show()
	
	modal.addEventListener('shown.bs.modal', () => initGiscus(modal, entry))
	modal.addEventListener('hidden.bs.modal', () => modal.remove())
}

function createModal(entry) {
	const modal = document.createElement("div")
	modal.className = "modal fade"
	modal.tabIndex = -1
	modal.innerHTML = `
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Comments for ${entry.name} (${entry.id})</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="giscus"></div>
				</div>
			</div>
		</div>`
	return modal
}

function initGiscus(modal, entry) {
	const giscusContainer = modal.querySelector('.giscus')
	setTimeout(() => {
		const script = document.createElement('script')
		script.src = "https://giscus.app/client.js"
		script.setAttribute("data-repo", "placeAtlas/atlas-2023")
		script.setAttribute("data-repo-id", "R_kgDOJyrvYg")
		script.setAttribute("data-category", "Entry Discussion")
		script.setAttribute("data-category-id", "DIC_kwDOJyrvYs4Cn1UC")
		script.setAttribute("data-mapping", "specific")
		script.setAttribute("data-term", `${entry.name} (${entry.id})`)
		script.setAttribute("data-strict", "0")
		script.setAttribute("data-reactions-enabled", "1")
		script.setAttribute("data-emit-metadata", "0")
		script.setAttribute("data-input-position", "top")
		script.setAttribute("data-theme", "preferred_color_scheme")
		script.setAttribute("data-lang", "en")
		script.setAttribute("data-loading", "lazy")
		script.setAttribute("crossorigin", "anonymous")
		script.async = true
		giscusContainer.appendChild(script)
	}, 100)
}