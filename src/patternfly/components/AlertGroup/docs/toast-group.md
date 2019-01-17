## Overview

An alert group that includes the `.pf-m-toast` modifier becomes a Toast Alert Group with unique positioning in the top-right corner of the window. `.pf-c-alert-group` is required to create a Toast Alert Group.

Every Toast alert must include a close button to dismiss the alert.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="alert"` | `.pf-c-alert__body` |  Communicates contents of the alert message to the user. **Required** |

### Modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-toast`| `.pf-c-alert-group` | Applies toast alert styling to an alert group. |
