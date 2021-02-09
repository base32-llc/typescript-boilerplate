import log from "loglevel";
import { loadEnv } from "./utils/loadEnv";

// load the environment variables
loadEnv();

function main() {
    log.setLevel("debug");

    log.info("This is the main entry point of the program.");
    const test = {
        value: "test",
        ab: "test",
    };
    log.debug(test.value);
}

main();
