# BD Address

This project provides a set of functions to retrieve information about divisions, districts, upazillas, and unions in Bangladesh.

## Installation

To use this project, you need to have Node.js installed. Then, you can clone the repository and install the dependencies.

```bash
git clone <repository-url>
cd bd-address
npm install
```

## Usage

You can import the BDADDRESS class from index.js and use its static methods to get the required data.

Example

```
import BDADDRESS from './index.js';

// Get all divisions
const allDivisions = BDADDRESS.divisions();
console.log('All Divisions:', allDivisions);

// Get all districts
const allDistricts = BDADDRESS.districts();
console.log('All Districts:', allDistricts);

// Get districts by division id
const divisionId = '1'; // Example division id
const districtsByDivision = BDADDRESS.district(divisionId);
console.log(`Districts in Division ${divisionId}:`, districtsByDivision);

// Get all upazillas
const allUpazillas = BDADDRESS.upazillas();
console.log('All Upazillas:', allUpazillas);

// Get upazillas by district id
const districtId = '1'; // Example district id
const upazillasByDistrict = BDADDRESS.upazilla(districtId);
console.log(`Upazillas in District ${districtId}:`, upazillasByDistrict);
```

## Methods

BDADDRESS.divisions(): Returns all divisions.
BDADDRESS.districts(): Returns all districts.
BDADDRESS.district(id): Returns districts filtered by the given division id. If no id is provided, it returns a message asking for a division id.
BDADDRESS.upazillas(): Returns all upazillas.
BDADDRESS.upazilla(id): Returns upazillas filtered by the given district id. If no id is provided, it returns a message asking for a district id.

## Example Data Structure

### Division

```
[
  {
    "id": "1",
    "name": "Dhaka"
  },
  ...
]
```

### District

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

### Upazilla

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

### Union

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

## License

This project is licensed under the MIT License.
