#!/bin/bash

array=()

while read p; do
  array+=","
  array+="'"
  array+="$p"
  array+="'"
done <day_1_data.txt

echo $array > day_1_data_clean.txt