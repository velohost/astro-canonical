# Changelog

All notable changes to this project will be documented in this file.

## [1.1.1] - 2026-08-23

### Fixed

- Fixed a crash on Windows (`ENOENT: no such file or directory, scandir ...`) caused by deriving the build output directory from `new URL(dir).pathname`, which mangles Windows drive-letter paths. The output directory is now resolved with `fileURLToPath`, and internal path comparisons are normalized to handle both `/` and `\` separators. ([#2](https://github.com/velohost/astro-canonical/pull/2), fixes [#1](https://github.com/velohost/astro-canonical/issues/1)) — thanks to [@flcdrg](https://github.com/flcdrg)

## [1.1.0] - 2026-01-16

### Added

- Astro v6 support.

## [1.0.0]

- Initial release.
