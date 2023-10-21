<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Click04;
use Carbon\Carbon;

class Click04Controller extends Controller
{
    public function getData(Request $request)
    {
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
        ]);

        $data_cl4 = [];

        if ($validate->fails()) {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Error al traer datos!',
                'errors' => $validate->errors()
            ];
        } else {

            $click04 = Click04::get();
            if ($click04) {
                foreach ($click04 as $key) {
                    $array = [
                        'id' => $key->id,
                        'detalle' => $key->detalle,
                        'total' => $key->total,
                    ];
                    array_push($data_cl4, $array);
                }
            }
        }
        return $data_cl4;
    }
}