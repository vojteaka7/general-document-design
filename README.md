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

## Linefont a Wevefont

Pokud uvnitř `<em>` použijete `<code>`, změní se font na [Linefont](https://fonts.google.com/specimen/Linefont). Pokud uvnitř `<strong>` použijete `<code>` 
změní se font na [Wavefont](https://fonts.google.com/specimen/Wavefont). Je to užitečné pro tvorbu inline grafů. Doporučují si najít [princip 
fungování](https://fonts.google.com/specimen/Linefont/about) těchto fontů.

## Nádcházející funkce

- tmavý motiv
- samostatné definice barevných motivů

---

- soubor `index.html` slouží pouze jako příklad
- soubor `style-min.js` je dostupný též na adrese: `http://vojteaka.cz/assets/js/gdd-min.js`
