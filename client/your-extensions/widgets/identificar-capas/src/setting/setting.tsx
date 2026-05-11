import { React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import type { IMConfig } from '../config'

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  return (
    <div className="widget-setting-demo">
      <p>Configuración de Identificar Capas</p>
      <p>Propiedad de configuración: {props.config?.exampleConfigProperty}</p>
    </div>
  )
}

export default Setting