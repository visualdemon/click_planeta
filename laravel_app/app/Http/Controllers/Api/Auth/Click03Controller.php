<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\Click01;
use App\Models\Click02;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Click03;
use Carbon\Carbon;

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

            $click02 = Click02::where('id', $params_array['id_click02'])->first();
            if ($click02) {

                date_default_timezone_set('America/Bogota');
                $fecha = Date('Y-m-d');

                $cantidad = $params_array['c_click02'] / $click02['dividir'];
                $click03 = new Click03();
                $click03->id_user = $params_array['id_user'];
                $click03->id_click01 = $params_array['id_click01'];
                $click03->id_click02 = $params_array['id_click02'];
                $click03->c_click01 = $params_array['c_click01'];
                $click03->c_click02 = $params_array['c_click02'];
                $click03->cg_click02 = $cantidad;
                $click03->fecha = $fecha;

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

            $click02 = Click02::where('id', $params_array['id_click02'])->first();
            if ($click02) {
                $cantidad = $params_array['c_click02'] / $click02['dividir'];
                $click03 = Click03::where('id', $params_array['id'])->update([
                    'id_user' => $params_array['id_user'],
                    'id_click01' => $params_array['id_click01'],
                    'id_click02' => $params_array['id_click02'],
                    'c_click02' => $params_array['c_click02'],
                    'c_click01' => $params_array['c_click01'],
                    'cg_click02' => $cantidad

                ]);
            }

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


    public function deleteClick03(Request $request)
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
            $click03 = Click03::where('id', $params_array['id'])->delete();

            if ($click03) {
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Datos Eliminados!',
                    'errors' => ''
                ];
            } else {
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
    public function getData(Request $request)
    {
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'id_user' => 'required',

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
                $total_eliminado = 0;
                $energia_ahorrada = 0;
                $emisiones_co2 = 0;
                $ahorro_dolares = 0;
                $encendidos = 0;
                foreach ($click03 as $key) {
                    //total eliminado
                    $total_eliminado += ($key->cg_click02 * 1000);
                }
                //energia ahorrada
                $energia_ahorrada = ($total_eliminado / 1024) * 6.536;
                //emisiones C02
                $emisiones_co2 = (($total_eliminado / 1024) * 831) / 1000000;
                //ahorro dolares
                $ahorro_dolares = ($total_eliminado / 1024) * 0.1245398;
                //encendidos
                $encendidos = ($total_eliminado / 1024) * 0.145;

                $data = [
                    'total_eliminado' => number_format($total_eliminado, 2),
                    'energia_ahorrada' => number_format($energia_ahorrada, 2),
                    'emisiones_co2' => number_format($emisiones_co2, 4),
                    'ahorro_dolares' => number_format($ahorro_dolares, 2),
                    'encendidos' => number_format($encendidos, 2)
                ];
            }
        }
        return $data;
    }

    public function getGigasLastMonth(Request $request)
    {



        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'id_user' => 'required',

        ]);

        if ($validate->fails()) {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Error al traer datos!',
                'errors' => $validate->errors()
            ];
        } else {

            $primerDiaMesAnterior = date("Y-m-01", strtotime("last month"));

            // Obtener el último día del mes anterior
            $ultimoDiaMesAnterior = date("Y-m-t", strtotime("last month"));

            $click03 = Click03::where('id_user', $params_array['id_user'])->whereBetween('fecha', [$primerDiaMesAnterior, $ultimoDiaMesAnterior])
                ->where('id_user', $params_array['id_user'])->get();

            if ($click03) {
                $sumatoria = 0;
                foreach ($click03 as $key) {
                    $sumatoria += $key->cg_click02;
                }

                $fecha = Carbon::parse($primerDiaMesAnterior);
                $nombre_mes = $fecha->formatLocalized('%B');

                $data = [
                    'mes' => $nombre_mes,
                    'cantidad' => $sumatoria
                ];
            }
        }

        return $data;
    }

}