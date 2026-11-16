terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}

provider "azurerm" {
  features {}
  # Azure for Students: keine Ressourcenanbieter automatisch registrieren
  resource_provider_registrations = "none"
}

variable "kuerzel" {
  type = string
}

variable "location" {
  type    = string
  default = "switzerlandnorth"
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-tag5-${var.kuerzel}"
  location = var.location
  tags = {
    kurs  = "azure-basics"
    tag   = "5"
    owner = var.kuerzel
  }
}

resource "azurerm_storage_account" "st" {
  name                     = "sttag5tf${var.kuerzel}"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
}

output "blob_url" {
  value = azurerm_storage_account.st.primary_blob_endpoint
}
