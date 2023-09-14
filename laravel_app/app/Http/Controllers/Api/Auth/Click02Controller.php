<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Click02;
use Illuminate\Http\Request;


class Click02Controller extends Controller
{
    public function getClick02(Request $request)
    {

        $click02 = Click02::all();
        $array = array();
        if ($click02) {
            foreach ($click02 as $cl2) {
                $array_ = array(
                    'id' => $cl2->id,
                    'detalle' => $cl2->detalle,
                    'siglas' => $cl2->siglas
                );
                array_push($array, $array_);
            }
        }
        return response($array, 200);
    }
}