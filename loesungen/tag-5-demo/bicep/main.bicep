targetScope = 'subscription'

param location string = deployment().location
param kuerzel string

resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-tag5-${kuerzel}'
  location: location
  tags: {
    kurs: 'azure-basics'
    tag: '5'
    owner: kuerzel
  }
}

module storage 'storage.bicep' = {
  name: 'storage-${kuerzel}'
  scope: rg
  params: {
    location: location
    kuerzel: kuerzel
  }
}

output blobUrl string = storage.outputs.blobUrl
