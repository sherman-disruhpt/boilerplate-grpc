import * as shell from "shelljs";

shell.cp(".env", "dist");
shell.cp("-r","src/todo/proto", "dist/todo");
shell.cp("package.json", "dist");