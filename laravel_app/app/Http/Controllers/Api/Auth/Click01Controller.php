<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Click01;
use Illuminate\Http\Request;


class Click01Controller extends Controller
{
    
    public function getClick01(Request $request)
    {

        $click01 = Click01::all();
        $array = array();
        if ($click01) {
            foreach ($click01 as $cl1) {
                $array_ = array(
                    'id' => $cl1->id,
                    'detalle' => $cl1->detalle
                );
                array_push($array, $array_);
            }
        }
        return response($array, 200);
    }
}
