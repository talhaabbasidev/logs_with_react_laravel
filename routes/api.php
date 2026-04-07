<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Notification;

Route::get('/logs', function () {
    return Notification::latest()->paginate(7000);
});

Route::get('/logs-filter', function (Request $request) {
    $query = DB::table('notification');

    if ($request->status) {
        $query->where('status', $request->status);
    }

    return $query->paginate(20);
});