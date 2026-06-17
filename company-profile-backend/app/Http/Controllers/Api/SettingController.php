<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CompanySetting;
use Illuminate\Http\JsonResponse;

class SettingController extends Controller
{
    /**
     * Display a listing of company settings.
     */
    public function index(): JsonResponse
    {
        $settings = CompanySetting::pluck('value', 'key');
        return response()->json($settings);
    }
}
