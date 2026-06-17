<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    /**
     * Display a listing of active services.
     */
    public function index(): JsonResponse
    {
        $services = Service::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get();

        return response()->json($services);
    }
}
