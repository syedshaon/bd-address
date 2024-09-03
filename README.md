# BD Address

This package provides a set of functions to retrieve information about divisions, districts, upazillas, unions, and post codes in Bangladesh.

## Installation

To use this project, you need to have Node.js installed. Then, you can clone the repository and install the dependencies.

```bash
git clone https://github.com/syedshaon/bd-address
cd bd-address
npm install
```

## Usage

You can import the BdAddress class and other functions from index.js and use their methods to get the required data.

## Example

```
import BdAddress, { bdUnions, bdUnionByUpazilla, bdPostCodes } from './index.js';

// Get all divisions
const allDivisions = BdAddress.divisions();
console.log('All Divisions:', allDivisions);

// Get all districts
const allDistricts = BdAddress.districts();
console.log('All Districts:', allDistricts);

// Get districts by division id
const divisionId = '1'; // Example division id
const districtsByDivision = BdAddress.district(divisionId);
console.log(`Districts in Division ${divisionId}:`, districtsByDivision);

// Get all upazillas
const allUpazillas = BdAddress.upazillas();
console.log('All Upazillas:', allUpazillas);

// Get upazillas by district id
const districtId = '1'; // Example district id
const upazillasByDistrict = BdAddress.upazilla(districtId);
console.log(`Upazillas in District ${districtId}:`, upazillasByDistrict);

// Get all unions
const allUnions = bdUnions();
console.log('All Unions:', allUnions);

// Get unions by upazilla id
const upazillaId = '1'; // Example upazilla id
const unionsByUpazilla = bdUnionByUpazilla(upazillaId);
console.log(`Unions in Upazilla ${upazillaId}:`, unionsByUpazilla);

// Get all post codes
const allPostCodes = bdPostCodes();
console.log('All Post Codes:', allPostCodes);
```

## Methods

### BdAddress Class

- BdAddress.divisions(): Returns all divisions.
- BdAddress.districts(): Returns all districts.
- BdAddress.district(id): Returns districts filtered by the given division id. If no id is provided, it returns a message asking for a division id.
- BdAddress.upazillas(): Returns all upazillas.
- BdAddress.upazilla(id): Returns upazillas filtered by the given district id. If no id is provided, it returns a message asking for a district id.

### Functions

- bdUnions(): Returns all unions.
- bdUnionByUpazilla(id): Returns unions filtered by the given upazilla id. If no id is provided, it returns a message asking for an upazilla id.
- bdPostCodes(): Returns all post codes.

## Example Data Structure

Division

```[
  {
    "id": "1",
    "name": "Dhaka"
  },
  ...
]
```

District

```
[
  {
    "id": "1",
    "division_id": "1",
    "name": "Dhaka"
  },
  ...
]
```

Upazilla

```
[
  {
    "id": "1",
    "district_id": "1",
    "name": "Dhamrai"
  },
  ...
]
```

Union

```
[
  {
    "id": "1",
    "upazilla_id": "1",
    "name": "Kamalpur"
  },
  ...
]
```

License
This project is licensed under the MIT License.
