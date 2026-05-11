#!/bin/bash

case "$1" in
  start)
    systemctl start nora.service
    ;;
  stop)
    systemctl stop nora.service
    ;;
  restart)
    systemctl restart nora.service
    ;;
  status)
    systemctl status nora.service
    ;;
  *)
    echo "Usage: /nora/nora.sh {start|stop|restart|status}"
    ;;
esac
