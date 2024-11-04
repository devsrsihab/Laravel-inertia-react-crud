<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get("/", [PostController::class, "index"]);

// About Route
Route::get("/about", function () {
    return Inertia::render("About");
});

// Services Route
Route::get("/services", function () {
    return Inertia::render("Services");
});

// Contact Route
Route::get("/contact", function () {
    return Inertia::render("Contact");
});

// post route
Route::resource("posts", PostController::class)->except("index");
