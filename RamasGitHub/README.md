# Ejercicio de ramas en GitHub

## Descripción

En este ejercicio se practicó la creación, publicación, sincronización y combinación de ramas utilizando Git y GitHub.

## Ramas utilizadas

Se trabajó con las siguientes ramas:

* `main`
* `feature/ramas-github`
* `bugfix/ramas-github`
* `hotfix/ramas-github`

> Nota: No se utilizaron los nombres `feature/`, `bugfix/` y `hotfix/` directamente porque Git no permite que una rama termine en `/`. Por eso se utilizaron nombres con esos prefijos.

## 1. Creación y sincronización de main

Primero se creó la rama `main` a partir de la rama local existente.

```bash
git checkout -b main
```

Como el repositorio remoto ya tenía una rama `main` con contenido diferente, fue necesario sincronizar ambas historias:

```bash
git fetch origin
git pull origin main --allow-unrelated-histories
```

Después se publicó la rama:

```bash
git push -u origin main
```

## 2. Rama feature

Se creó la rama:

```bash
git checkout -b feature/ramas-github
```

Luego se publicó en GitHub:

```bash
git push -u origin feature/ramas-github
```

Dentro de esta rama se creó el archivo `README.md`.

Después se agregó y se guardó el cambio:

```bash
git add README.md
git commit -m "Agregar README en feature"
git push
```

## 3. Rama bugfix

Se regresó a `main` y se creó la rama:

```bash
git checkout main
git checkout -b bugfix/ramas-github
```

La rama se publicó con:

```bash
git push -u origin bugfix/ramas-github
```

Dentro de esta rama se creó `DocumentacionSolucion.txt`.

El archivo se agregó y publicó mediante:

```bash
git add DocumentacionSolucion.txt
git commit -m "Agregar documentacion en bugfix"
git push
```

## 4. Rama hotfix

Se regresó nuevamente a `main` y se creó:

```bash
git checkout main
git checkout -b hotfix/ramas-github
```

Después se publicó:

```bash
git push -u origin hotfix/ramas-github
```

Dentro de esta rama se creó `DocumentacionSolucionhotfix.txt`.

El archivo se agregó y publicó mediante:

```bash
git add DocumentacionSolucionhotfix.txt
git commit -m "Agregar documentacion en hotfix"
git push
```

## 5. Integración de las ramas en main

Después de terminar los cambios, se regresó a `main`:

```bash
git checkout main
```

Se integraron las tres ramas:

```bash
git merge feature/ramas-github
git merge bugfix/ramas-github
git merge hotfix/ramas-github
```

Finalmente se publicaron los cambios de `main`:

```bash
git push
```

## 6. Verificación final

Se verificaron las ramas locales y remotas con:

```bash
git branch -a
```

Se comprobó también el estado del repositorio:

```bash
git status
```

La rama `main` quedó sincronizada con `origin/main`.

## Resultado

El ejercicio permitió practicar la creación de ramas, publicación de ramas en GitHub, creación de archivos, commits, sincronización y combinación de cambios mediante `merge`.
