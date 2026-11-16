#eingeloggtes account anzeigen
az account show --output table

#subscription wechseln
az account set --subscription "<name oder id>" oder mit --subscription

#check deployment
az deployment sub what-if --location switzerlandnorth --template-file main.bicep --parameters kuerzel=pat

#deployment anstossen
az deployment sub create --location switzerlandnorth --template-file main.bicep --parameters kuerzel=pat

#Aufräumen
az group delete --name rg-tag5-pat --yes --no-wait


#ARM template generieren
az bicep build --file main.bicep --outfile arm/main.json


#bicep erstellen mit Namen überschreiben wenn exisitert (force)
az bicep decompile --file main.json --force
