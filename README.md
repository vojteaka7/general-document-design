# general-document-design

Jednoduché stylování pro HTML dokumenty. Slouží například pro stylování dokumentů převedených z Markdownu.

Je nutno načíst `style.js`:

```
<script src="style-min.js></script>
```

Samotné `style.css` nefunguje, protože chybí definice barev, které jsou obsažené až v `style.js`. Je v plánu přidat samostatné css soubory s definicemi barev.

## Barevné motivy

Pomocí GET query lze změnit barevný motiv dokumentu. Možnosti jsou `?theme=sepia` a `?theme=yellow`. Výchozí barevný motiv je černobílý.

Dále je možné nastavit zda se na obrázky má použít filtr pro příslšný barevný motiv. Stačí připsat `?filter`, bez hodnoty.

### Příklady

- `priklad.html?theme=sepia`; barevný motiv je sépie, obrázky se zobrazují s plnými barvami
- `priklad.html?filter`; barevný motiv je černobílý, obrázky se zobrazují též černobíle
- `priklad.html?theme=yellow&filter`; barevný motiv je žlutý, obrázky se zobrazují žlutě

## Styly pro tisk

Barevný motiv pro tisk je černobílý a nelze to změnit. Obrázky mají černobílý filtr.

## Nádcházející funkce

- tmavý motiv
- samostatné definice barevných motivů

---

Soubor `index.html` slouží pouze jako příklad.
