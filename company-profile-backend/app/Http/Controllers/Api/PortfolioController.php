<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Display a listing of portfolio items.
     */
    public function index(): JsonResponse
    {
        $portfolios = Portfolio::orderBy('is_featured', 'desc')
            ->orderBy('year', 'desc')
            ->get();

        return response()->json($portfolios);
    }
}
