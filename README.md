# workflows

This repository contains reusable workflows used across different projects of the organization.

Refer to the actual workflow file, located in [.github/workflows/](./.github/workflows/), for documentation.

## Adding Reusable Workflows

### Naming convention

All workflows follow a naming convention that is as follows:

| Name |
| ---- |
| `<type>-<name>.yml`|

- `type` refers to the type of workflow (e.g. `test`, `build`)
- `name` refers to the actual name of the workflow

> [!NOTE]
> Workflows only to be used within this repository (i.e. non-reusable workflows) should be prefixed with `local`.

> [!IMPORTANT]
> When adding a reusable workflow, please call it in the [local-test-reusable-workflows.yml](./.github/workflows/local-test-reusable-workflows.yml) workflow.
