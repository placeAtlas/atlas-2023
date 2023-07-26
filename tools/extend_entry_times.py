from io import TextIOWrapper
import json
import os
import tqdm

pre_extend_times = [254, 255, 256, 257]
post_extend_time = 258

if len(pre_extend_times) == 0:
	pre_extend_times.append(post_extend_time - 1)
	pre_extend_times.append(post_extend_time - 2)
post_extend_time = str(post_extend_time)

while not os.path.exists('README.md'):
	os.chdir('..')
	
with open('web/atlas.json', 'r', encoding='utf-8') as atlas_file:
	atlas_data = json.loads(atlas_file.read())

def per_line_entries(entries: list, file: TextIOWrapper):
	"""
	Returns a string of all the entries, with every entry in one line.
	"""
	file.write("[\n")
	line_temp = ""
	for entry in tqdm.tqdm(entries):
		if line_temp:
			file.write(line_temp + ",\n")
		line_temp = json.dumps(entry, ensure_ascii=False)
	file.write(line_temp + "\n]")

def extend_time_key(items):
	for key, value in list(items.items()):
		if key == '':
			del items[key]
			items[f'{pre_extend_times[0]}-{post_extend_time}'] = value
			continue
		elif key == '254' or key == '254-258':
			del items[key]
			items[f'250-258'] = value
			continue

		times = key.split(', ')
		for time in times:
			if '-' in time:
				end_time = time[time.find('-') + 1:]
			else:
				end_time = time
			if int(end_time) in pre_extend_times:
				if '-' in key:
					new_key = key.replace(end_time, post_extend_time)
				else:
					new_key = key.replace(end_time, f'{key}-{post_extend_time}')
				del items[key]
				items[new_key] = value
				break

for entry in atlas_data:
	extend_time_key(entry['path'])
	extend_time_key(entry['center'])
	
with open('web/atlas.json', 'w', encoding='utf-8') as atlas_file:
	per_line_entries(atlas_data, atlas_file)
