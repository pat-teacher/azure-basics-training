targetScope = 'subscription'

param location string = deployment().location
param kuerzel string
param schulIp string
param adminPublicKey string

resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-projekt-${kuerzel}'
  location: location
  tags: {
    kurs: 'azure-basics'
    tag: '5'
    owner: kuerzel
  }
}

module webserver 'webserver.bicep' = {
  name: 'webserver-${kuerzel}'
  scope: rg
  params: {
    location: location
    kuerzel: kuerzel
    schulIp: schulIp
    adminPublicKey: adminPublicKey
  }
}

output url string = webserver.outputs.url
