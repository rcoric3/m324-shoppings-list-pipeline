### Verständnis und Auseinandersetzung mit der Pipeline
Ich durfte schon Erfahrungen im Betrieb mit Pipelines machen und hatte schon bevor wir dieses Thema in der Schule angeschaut haben ein Vorwissen aufbauen.
Die CI/CD-Pipeline ist so konzipiert, dass sie bei jedem Push auf den `main`-Branch automatisch ausgeführt wird. Sie prüft den Code auf Syntaxfehler und führt Tests durch, bevor der Build-Prozess startet. Dies hilft, Fehler frühzeitig zu erkennen und sichert die Qualität des Codes.
### Überlegungen zu einzelnen Schritten
- **Checkout**: Dieser Schritt stellt sicher, dass die Pipeline den neuesten Code aus dem Repository verwendet.
- **Setup Node.js**: Hier wird die richtige Version von Node.js installiert, um sicherzustellen, dass das Projekt kompatibel ist.
- **Linting und Tests**: Das Linting und die Tests werden ausgeführt, um Syntaxfehler und fehlerhaften Code zu vermeiden. Falls ein Fehler auftritt, wird die Pipeline angehalten.
- **Build**: Abschliessend wird die Anwendung gebaut, was die letzte Überprüfung darstellt, bevor Änderungen veröffentlicht werden.
### Kritik und Verbesserungsvorschläge
In Zukunft könnte die Pipeline optimiert werden, um parallele Schritte für Linting und Tests einzuführen, was die Ausführungszeit verkürzen würde. Ausserdem könnten zusätzliche Prüfungen wie Security-Checks hinzugefügt werden, um die Code-Qualität weiter zu sichern.