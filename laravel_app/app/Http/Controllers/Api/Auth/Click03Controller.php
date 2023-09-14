<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Click03;

class Click03Controller extends Controller
{
    public function register(Request $request)
    {

        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'id_user' => 'required',
            'id_click01' => 'required',
            'id_click02' => 'required',
            'c_click01' => 'required',
            'c_click02' => 'required',
        ]);
        if ($validate->fails()) {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Datos No Guardados, por favor verificar!',
                'errors' => $validate->errors()
            ];
        } else {
            $click03 = new Click03();
            $click03->id_user = $params_array['id_user'];
            $click03->id_click01 = $params_array['id_click01'];
            $click03->id_click02 = $params_array['id_click02'];
            $click03->c_click01 = $params_array['c_click01'];
            $click03->c_click02 = $params_array['c_click02'];
            $click03->save();

            if ($click03) {
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Datos guardados correctamente!',
                    'errors' => ''
                ];
            } else {
                $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'Datos No Guardados, por favor verificar!',
                    'errors' => 'Error al guardar'
                ];
            }
        }
        return response($data, 200);
    }
}