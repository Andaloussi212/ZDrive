# ZDrive - Schéma du modèle de données

## 1. Schéma simple

```txt
User
- id
- username
- passwordHash
- role
- createdAt


Semester
- id
- name
- year
- orderIndex

        1
Semester ──────────── * Subject

Subject
- id
- name
- description
- semesterId

        1
Subject ───────────── * Resource

Resource
- id
- title
- description
- originalFilename
- storedFilename
- filePath
- mimeType
- size
- type
- uploadedAt
- subjectId
```
