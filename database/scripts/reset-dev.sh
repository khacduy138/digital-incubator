#!/bin/bash
npx prisma migrate reset --force
npx prisma db seed
