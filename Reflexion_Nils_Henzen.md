### Verständnis und Auseinandersetzung mit der Pipeline
- Vorwissen hatte ich schon, da ich Betrieblich schon mit Jenkins gearbeitet habe und damit Deployments gemacht habe. 
### Überlegungen zu einzelnen Schritten
- **Checkout**: Dieser Schritt stellt sicher, dass die Pipeline den neuesten Code aus dem Repository verwendet.
- **Setup Node.js**: Hier wird die richtige Version von Node.js installiert, um sicherzustellen, dass das Projekt kompatibel ist.
- **Linting und Tests**: Das Linting und die Tests werden ausgeführt, um Syntaxfehler und fehlerhaften Code zu vermeiden. Falls ein Fehler auftritt, wird die Pipeline angehalten.
- **Build**: Abschliessend wird die Anwendung gebaut, was die letzte Überprüfung darstellt, bevor Änderungen veröffentlicht werden.
### Kritik und Verbesserungsvorschläge
- Die Pipeline könnte durch das Hinzufügen von Caching für die Node-Module optiemiert werden, um die Laufzeit zu verkürzen und die Effizienz zu steigern.
- Projekt vor Prüfungsbeginn sauber aufsetzen, React versionen etc. führen zu unnötig verlorener Zeit.
- schriftliche Prüfung oder ganzes Projekt, praktische Prüfungen sind immer mühsam
