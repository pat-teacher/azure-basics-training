az login
$env:ARM_SUBSCRIPTION_ID = az account show --query id --output tsv   # Provider ab Version 4 braucht die Abonnement-ID
terraform init                                     # lädt den azurerm-Provider herunter
terraform plan  -var "kuerzel=<kuerzel>"           # Vorschau, wie what-if bei Bicep
terraform apply -var "kuerzel=<kuerzel>"           # erstellt alles, mit «yes» bestätigen


#Aufräumen
terraform destroy -var "kuerzel=<kuerzel>"


