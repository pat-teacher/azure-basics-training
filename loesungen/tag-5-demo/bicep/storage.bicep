param location string = resourceGroup().location
param kuerzel string

resource st 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: 'sttag5bicep${kuerzel}'
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
}

output blobUrl string = st.properties.primaryEndpoints.blob
