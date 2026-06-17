<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;

class ArticleController extends Controller
{
    /**
     * Display a listing of published articles.
     */
    public function index(): JsonResponse
    {
        $articles = Article::whereNotNull('published_at')
            ->where('published_at', '<=', Carbon::now())
            ->orderBy('published_at', 'desc')
            ->get();

        return response()->json($articles);
    }

    /**
     * Display the specified article by slug.
     */
    public function show(string $slug): JsonResponse
    {
        $article = Article::where('slug', $slug)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', Carbon::now())
            ->firstOrFail();

        return response()->json($article);
    }
}
