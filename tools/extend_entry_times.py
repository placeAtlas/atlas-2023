from io import TextIOWrapper
import json
import os
import tqdm

pre_extend_times = [250, 254, 255, 256, 257]
post_extend_time = 258

exclude_extend = set([
	3030,
	6040,
	6135,
	6157,
	6482,
	6483,
])

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
		old_key = key

		if key == '':
			key = f'{pre_extend_times[0]}-{post_extend_time}'
		elif key == '250' or key == '254' or key == '254-258':
			key = '250-258'

		times = key.split(', ')
		for time in times:

			# Parse keys for analysis
			variation = ''
			start_time = None
			end_time = None
			if ':' in time:
				variation = time[:time.find(':')]
				time = time[time.find(':') + 1:]
			if '-' in time:
				start_time = int(time[:time.find('-')]) 
				end_time = int(time[time.find('-') + 1:])
			else:
				start_time = end_time = int(time)
			
			# Extend default canvas periods
			if end_time in pre_extend_times:
				if '-' in key:
					key = key.replace(end_time, post_extend_time)
				else:
					key = key.replace(end_time, f'{key}-{post_extend_time}')

			# Extend default canvas to TFC
			if variation == '' and start_time <= 250 and 250 <= end_time:
				key = key + ', T'

		if old_key != key:
			del items[old_key]
			items[key] = value

for entry in atlas_data:
	if not entry['id'] in exclude_extend:
		extend_time_key(entry['path'])
		extend_time_key(entry['center'])

with open('web/atlas.json', 'w', encoding='utf-8') as atlas_file:
	per_line_entries(atlas_data, atlas_file)
