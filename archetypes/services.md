---
name: "{{ replace .Name "-" " " | title }}"
image: ""
date: {{ .Date }}
draft: true
weight: 9999
headless: true
---