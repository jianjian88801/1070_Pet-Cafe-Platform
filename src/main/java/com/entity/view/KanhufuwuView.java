package com.entity.view;

import com.entity.KanhufuwuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 看护服务
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-04-17 15:15:30
 */
@TableName("kanhufuwu")
public class KanhufuwuView  extends KanhufuwuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KanhufuwuView(){
	}
 
 	public KanhufuwuView(KanhufuwuEntity kanhufuwuEntity){
 	try {
			BeanUtils.copyProperties(this, kanhufuwuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
