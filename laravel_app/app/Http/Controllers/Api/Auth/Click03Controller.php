<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\Click01;
use App\Models\Click02;
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

    public function getClick03(Request $request)
    {
        $array = array();
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'id_user' => 'required'
        ]);

        if ($validate->fails()) {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Error al traer datos!',
                'errors' => $validate->errors()
            ];
        } else {
            $click03 = Click03::where('id_user', $params_array['id_user'])->get();
            if ($click03) {
                foreach ($click03 as $key) {
                    $click01 = Click01::where('id', $key->id_click01)->first();
                    $click02 = Click02::where('id', $key->id_click02)->first();
                    $array_ = array(
                        'id' => $key->id,
                        'id_user' => $key->id_user,
                        'id_click01' => $key->id_click01,
                        'detalle_click01' => $click01->detalle,
                        'id_click02' => $key->id_click02,
                        'detalle_click02' => $click02->detalle,
                        'siglas_click02' => $click02->siglas,
                        'c_click01' => $key->c_click01,
                        'c_click02' => $key->c_click02,
                    );
                    array_push($array, $array_);
                }
            }
        }
        return response($array, 200);
    }
    public function updateClick03(Request $request)
    {

        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'id' => 'required',
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
                'message' => 'Error al traer datos!',
                'errors' => $validate->errors()
            ];
        } else {
            $click03 = Click03::where('id', $params_array['id'])->update([
                'id_user' => $params_array['id_user'],
                'id_click01' => $params_array['id_click01'],
                'id_click02' => $params_array['id_click02'],
                'c_click02' => $params_array['c_click02'],
                'c_click01' => $params_array['c_click01']
            ]);


            if ($click03) {
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Datos Actualizados!',
                    'errors' => ''
                ];
            } else {
                $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'Datos No Actualizados!',
                    'errors' => 'Datos no actualizados'
                ];
            }
        }
        return $data;
    }


    public function deleteClick03(Request $request){
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'id' => 'required',
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
                'message' => 'Error al traer datos!',
                'errors' => $validate->errors()
            ];
        }else{
            $click03 = Click03::where('id', $params_array['id'])->delete();

            if($click03){
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Datos Eliminados!',
                    'errors' => ''
                ];
            }else{
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Datos No Eliminados!',
                    'errors' => ''
                ];
            }
        }
        
        return $data;
    }
}