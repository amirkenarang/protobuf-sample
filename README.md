# Proto

## Instalation and Build

On **windows** install [protoc](https://github.com/protocolbuffers/protobuf/releases) then run this command:

`..\protoc-3.19.4-win64\bin\protoc.exe --js_out=import_style=commonjs,binary:. src/employees.proto`

on **Linux** isntall with `sudo apt install protobuf-compiler`. then run:

`protoc --js_out=import_style=commonjs,binary:. src/employees.proto`
