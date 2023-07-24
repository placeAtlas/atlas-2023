from io import TextIOWrapper
import json
import os
import tqdm

missing_times = [83, 93]

missing_times.sort(reverse=True)

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

def fill_time(etimes: int):
	for mtimes in missing_times:
		if mtimes <= etimes:
			etimes += 1
	return etimes

def fill_time_entry(items):
	for key, value in list(items.items()):
		times = key.split(', ')
		new_times = []
		for time in times:
			if '-' in time:
				new_keys = time.split('-')
				new_keys[0] = str(fill_time(int(new_keys[0])))
				new_keys[1] = str(fill_time(int(new_keys[1])))
				new_key = '-'.join(new_keys)
			else:
				new_key = str(fill_time(int(time)))
			new_times.append(new_key)
		new_key = ', '.join(new_times)
		del items[key]
		items[new_key] = value

for entry in atlas_data:
	fill_time_entry(entry['path'])
	fill_time_entry(entry['center'])
	
with open('web/atlas.json', 'w', encoding='utf-8') as atlas_file:
	per_line_entries(atlas_data, atlas_file)
