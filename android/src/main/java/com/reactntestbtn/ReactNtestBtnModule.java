package com.reactntestbtn;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;

import org.json.JSONException;
import org.json.JSONObject;

@ReactModule(name = ReactNtestBtnModule.NAME)
public class ReactNtestBtnModule extends ReactContextBaseJavaModule {
  public static final String NAME = "ReactNtestBtn";

  public ReactNtestBtnModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public boolean testing(String message, Callback callbackContext) throws JSONException {
    // Convert JSONObject to WritableMap
    WritableMap messagesConf = Arguments.createMap();
    messagesConf.putString("message", message);

    callbackContext.invoke(null, messagesConf);
    return true;
  }

  @ReactMethod
  public boolean anothertesting(String message, Callback callbackContext) throws JSONException {
    // Convert JSONObject to WritableMap
    WritableMap messagesConf = Arguments.createMap();
    messagesConf.putString("message", message);
    callbackContext.invoke(null, messagesConf);
    return true;
  }

}
