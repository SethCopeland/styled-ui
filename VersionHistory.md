# Changelog

## Pending

Please add changes here when they're committed to the `master` branch, then move to "Released" once the package is published.

### 2.0.0
* **Breaking**: After review with the UX team, there are several bootstrap components that are no longer included in this library, because they won't be used in any of our specs.
- Removed: Alert, Navbar*, Nav*, Breadcrumb*, Badge, Card*, Carousel*, Progress, Modal*, Tooltip, Table, ListGroup*, InputGroup*, Media, Tab*, Jumbotron, Pagination*, Collapse

## Released

### 1.4.2
* Fixed some spacing issues around elements caused by inherited styles

### 1.4.1
* Add triangle icon to typeahead. (#20)

### 1.4.0
* Added 'Collapse' accordion component

### 1.3.0
* Removed fixed 16px height on check-box (#17)
* Display children inside check-box component (#19)

### 1.2.3
* Fixed another bug when exporting AsyncTypeahead

### 1.2.2
* Fixed exporting async typeahead control
* Fixed a style issue if text-input was not already wrapped in a bootstrap element

### 1.2.1
* Fixed a few oversights in Help Box control

### 1.2.0
* check-box now supports different button types (needed for react-jsonschema-form)
* Added blue Help Box control

### 1.1.0

* Deprecated custom TextInput controls. They will be dropped on the next major release. It's technically a breaking change, but nobody was using these. If you really need them back, import them from '@faithlife/styled-ui/dist/deprecated.js'
* Updated Button margins
* Reduced bundle size of ag-grid style bundle
* Reduce main JS bundle size by excluding unused module exports

### 1.0.0
* **Breaking**: The main component stylesheet is now in `main.css`. Reference this instead of `styles.css`!
* New: Styles and demo components for ag-grid

### 0.0.x

* Themed bootstrap controls, including `Typeahead` and `InferredText`
* Initial alpha release of `Button`, `Checkbox`, and `TextInput` controls
