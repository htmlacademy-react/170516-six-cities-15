import {createAction} from "@reduxjs/toolkit";
import {Path} from "../../config";

export const redirectToRoute = createAction<Path>('utils/redirectToRoute');
