#!/usr/bin/env bash

set -e

CORE="/nora/nora-civilization-core"

PROTECTED=(
  "mother.js"
  "layers/"
  "engine/"
  "foundations/"
  "versioning/"
  "identity/"
  "rules/"
)

is_protected() {
  local target="$1"
  for p in "${PROTECTED[@]}"; do
    if [[ "$target" == *"$p"* ]]; then
      return 0
    fi
  done
  return 1
}

backup() {
  local file="$1"
  local ts=$(date +"%Y%m%d-%H%M%S")
  mkdir -p "$CORE/.backups"
  if [[ -f "$file" ]]; then
    cp "$file" "$CORE/.backups/$(basename "$file").$ts.bak"
  fi
}

cmd="$1"
shift

TARGET="$*"

case "$cmd" in
  sed|rm|mv|cp|nano)
    if is_protected "$TARGET"; then
      echo "❌ SECURITY-2: BLOCKED — Protected core file: $TARGET"
      exit 1
    fi
    backup "$TARGET"
    exec $cmd "$@"
    ;;
  *)
    exec $cmd "$@"
    ;;
esac
