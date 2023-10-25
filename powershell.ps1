$resourceGroupName = "example-resource-group"
$location = "East US"
$storageAccountName = "examplestorageaccount"

# Login to Azure
Connect-AzAccount

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount `
  -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName Standard_LRS `
  -Kind StorageV2