import { takeLatest, put, call } from "redux-saga/effects";

function* workGetNavigation(){
    
}


function* watchGetNavigation(){
    takeLatest('dashboard/getNavigation',workGetNavigation)
}