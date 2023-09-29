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
		new_times = []
		to_add_tfc = 0

		for time in times.copy():

			# Parse keys for analysis
			variation = ''
			start_time = None
			end_time = None
			if ':' in time:
				variation = time[:time.find(':')]
				time = time[time.find(':') + 1:]
			elif time.isalpha():
				variation = time
				time = ''
			if '-' in time:
				start_time = int(time[:time.find('-')]) 
				end_time = int(time[time.find('-') + 1:])
			elif time:
				start_time = end_time = int(time)
			
			# Extend default canvas periods
			if end_time in pre_extend_times:
				end_time = post_extend_time

			# Rebuild period string before adding it
			if start_time and end_time:
				if start_time == end_time:
					time = str(start_time)
				else:
					time = f'{start_time}-{end_time}'
			else:
				time = ''

			if time == '':
				time = variation
			else:
				if variation:
					time = f'{variation}:{time}'
			
			new_times.append(time)

			# Extend default canvas to TFC
			if variation == 'T':
				to_add_tfc = -1
			if variation == '' and start_time <= 250 and 250 <= end_time:
				if to_add_tfc == 0:
					to_add_tfc = 1 

		if to_add_tfc == 1:
			new_times.append('T')

		new_times = list(filter(lambda x: x, list(dict.fromkeys(new_times))))
		key = ', '.join(new_times)

		if old_key != key:
			del items[old_key]
			items[key] = value

for entry in atlas_data:
	if not entry['id'] in exclude_extend:
		extend_time_key(entry['path'])
		extend_time_key(entry['center'])

with open('web/atlas.json', 'w', encoding='utf-8') as atlas_file:
	per_line_entries(atlas_data, atlas_file)
