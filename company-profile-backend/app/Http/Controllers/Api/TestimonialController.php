<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class TestimonialController extends Controller
{
    /**
     * Display a listing of active testimonials.
     */
    public function index(): JsonResponse
    {
        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($testimonials);
    }
}
