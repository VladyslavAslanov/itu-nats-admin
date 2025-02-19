import {columns, ColumnTypes} from "../../hooks/useSort";
import {FiltersConfigType, TableConfigType} from "../../components/Table/Table";

export const defaultHeaderMap = {
    "name": "Name",
    "iss": "Issuer ID",
    "sub": "Subject",
    "iat": "Issued",
    "": ""
}

export const defaultColumnDataTypes: ColumnTypes = {
    name: columns.TEXT,
    iss: columns.TEXT,
    sub: columns.TEXT,
    iat: columns.NUMBER,
    "": columns.NONE
}

export const defaultTableConfig: TableConfigType = {
    columnMapNames: defaultHeaderMap,
    columnTypes: defaultColumnDataTypes
}

export const defaultFiltersConfig: FiltersConfigType = {
    searchBy: ["name", "sub", "iss"],
    dateRange: ["iat"],
    columnToggler: true
}
