import {Gulpclass, Task, SequenceTask} from "gulpclass";
import * as log4js from "log4js";

let gulp = require("gulp"),
    shell = require("gulp-shell"),
    logger = log4js.getLogger();


@Gulpclass()
export class Gulpfile {
    displayError(error: any){
        let errorString = `[${error.plugin}]`
        errorString += " " + error.message.replace("\n", "")
        if(error.fileName){
            errorString += " in " + error.fileName
        }
        if(error.lineNumber){
            errorString += " on line " + error.lineNumber
        }
        logger.error(errorString);

        (this as any).emit("end");
    }

    @SequenceTask()
    release() {
        return ["angularDeploy", "cordovaBuild"];
    }
    @SequenceTask()
    build(){
      return ["angularBuild", "cordovaEmulate"];
    }
    @SequenceTask()
    default(){
      return ["build"];
    }

    @Task()
    cordovaPrepare(done:Function){
        shell.task([
            "cordova prepare"
        ])(done);
    }

    @Task()
    angularBuild(done:Function){
        shell.task([
            "ng build"
        ])(done);
    }

    @Task()
    angularDeploy(done:Function){
        shell.task([
            "ng build --prod"
        ])(done);
    }

    @Task()
    cordovaEmulate(done:Function){
        shell.task([
            "cordova emulate ios --target='iPad-Air-2'"
        ])();
        done();
    }

    @Task()
    cordovaBuild(done:Function){
        shell.task([
            "cordova build ios"
        ])(done);
    }
}