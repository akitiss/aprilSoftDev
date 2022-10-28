import csv

with open('courses.csv') as csv_file:
    csv_reader = csv.DictReader(csv_file, delimiter=',')
    index = 0;
    for row in csv_reader:
        print(row)