<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use App\Models\Gener14;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $validate = Validator::make($params_array, [
            'tipdoc' => 'required',
            'docemp' => 'required',
            'prinom' => 'required',
            'priape' => 'required',
            'fecnac' => 'required',
            'codsex' => 'required',
            'ciudad' => 'required',
            'direccion' => 'required',
            'id_click04' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed'
        ]);

        if ($validate->fails()) {
            $user_email = User::where('email', $params_array['email'])->first();
            $user_pass = User::where('docemp', $params_array['docemp'])->first();
            if ($user_email) {
                $message = 'Ya existe un registro con el Email suministrado!';
            } else if ($user_pass) {
                $message = 'Ya existe un registro con el Numero de Documento suministrado!';
            } else if ($user_email and $user_pass) {
                $message = 'Ya existe un registro con el Email y Numero de Documento suministrado!';
            } else {
                $message = '';
            }

            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => $message,
                'errors' => $validate->errors()
            ];
            $code = 404;

        } else {

            $user = new User();
            $user->tipdoc = $params_array['tipdoc'];
            $user->docemp = $params_array['docemp'];
            $user->prinom = $params_array['prinom'];
            $user->segnom = $params_array['segnom'];
            $user->priape = $params_array['priape'];
            $user->segape = $params_array['segape'];

            $user->fecnac = $params_array['fecnac'];
            $user->codsex = $params_array['codsex'];

            $user->ciudad = $params_array['ciudad'];
            $user->direccion = $params_array['direccion'];
            $user->id_click04 = $params_array['id_click04'];
            $user->email = $params_array['email'];
            $user->password = Hash::make($params_array['password']);
            $user->save();

            if ($user) {
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'User Successfully Register.',
                    'errors' => ''
                ];
                $code = 200;
            } else {
                $data = [
                    'status' => 'error',
                    'code' => 400,
                    'message' => 'Error, No Register!',
                    'errors' => ''
                ];
                $code = 400;
            }
        }
        return response($data, $code);
    }


    public function getData(Request $request)
    {
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);
        $validate = Validator::make($params_array, [
            'id_user' => 'required'
        ]);

        if ($validate->fails()) {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Faltan datos!',
                'errors' => $validate->errors()
            ];
        } else {
            $data = User::where('id', $params_array['id_user'])->first();
        }
        return $data;
    }

    public function updateUser(Request $request)
    {
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);
        $validate = Validator::make($params_array, [
            'id' => 'required',
            'tipdoc' => 'required',
            'docemp' => 'required',
            'prinom' => 'required',
            'priape' => 'required',
            'fecnac' => 'required',
            'codsex' => 'required',
            'ciudad' => 'required',
            'direccion' => 'required',
            'email' => 'required'
        ]);

        if ($validate->fails()) {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Faltan datos!',
                'errors' => $validate->errors()
            ];
        } else {
            $users = User::where('id', $params_array['id'])->update(
                [
                    'tipdoc' => $params_array['tipdoc'],
                    'docemp' => $params_array['docemp'],
                    'priape' => $params_array['priape'],
                    'prinom' => $params_array['prinom'],
                    'segnom' => $params_array['segnom'],
                    'segape' => $params_array['segape'],
                    'fecnac' => $params_array['fecnac'],
                    'codsex' => $params_array['codsex'],
                    'ciudad' => $params_array['ciudad'],
                    'direccion' => $params_array['direccion'],
                    'email' => $params_array['email'],
                ]
            );
            if ($users) {
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
                    'errors' => 'Datos No Actualizados'
                ];
            }
        }

        return $data;
    }
}