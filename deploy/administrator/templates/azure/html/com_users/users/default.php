<?php defined('_JEXEC') or die('Restricted access'); ?>

<?php  JHTML::_('behavior.tooltip');  ?>

<?php
	JToolBarHelper::title( JText::_( 'User Manager' ), 'user.png' );
	//JToolBarHelper::custom( 'logout', 'cancel.png', 'cancel_f2.png', 'Logout' );
	JToolBarHelper::deleteList();
	JToolBarHelper::editListX();
	JToolBarHelper::addNewX();
?>
<div id="azure-users">
	<form action="index.php?option=com_users" method="post" name="adminForm">
		<table>
			<tr>
				<td width="100%">
					<input type="text" name="search" id="search" value="<?php echo $this->lists['search'];?>" class="text_area" onchange="document.adminForm.submit();" />
					<button onclick="this.form.submit();"><?php echo JText::_( 'Search' ); ?></button>
					<button onclick="document.getElementById('search').value='';this.form.getElementById('filter_type').value='0';this.form.getElementById('filter_logged').value='0';this.form.submit();"><?php echo JText::_( 'Reset' ); ?></button>
				</td>
				<td nowrap="nowrap">
					<?php echo $this->lists['type'];?>
					<?php //echo $this->lists['logged'];?>
				</td>
			</tr>
		</table>
	
		<table class="adminlist" cellpadding="1">
			<thead>
				<tr>
					<th width="20px" class="title">
						&nbsp;
						<!-- <input type="checkbox" name="toggle" value="" onclick="checkAll(<?php echo count($this->items); ?>);" /> -->
					</th>
					<th width="32px" class="title" nowrap="nowrap">
						<?php echo JHTML::_('grid.sort',   'ID', 'a.id', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
<!--
					<th width="2%" class="title">
						<?php echo JText::_( 'NUM' ); ?>
					</th>
-->
					<th width="50px" class="title" nowrap="nowrap">
						<?php echo JHTML::_('grid.sort',   'Status', 'a.block', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
					<th class="title">
						<?php echo JHTML::_('grid.sort',   'Name', 'a.name', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
					<th width="15%" class="title" align="left">
						<?php echo JHTML::_('grid.sort',   'Username', 'a.username', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
<!--
					<th width="5%" class="title" nowrap="nowrap">
						<?php echo JText::_( 'Logged In' ); ?>
					</th>
-->
					<th width="15%" class="title" align="left">
						<?php echo JHTML::_('grid.sort',   'Group', 'groupname', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
<!--
					<th width="15%" class="title">
						<?php echo JHTML::_('grid.sort',   'E-Mail', 'a.email', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
-->
					<th width="150px" class="title">
						<?php echo JHTML::_('grid.sort',   'Last Visit', 'a.lastvisitDate', @$this->lists['order_Dir'], @$this->lists['order'] ); ?>
					</th>
				</tr>
			</thead>
<!--
			<tfoot>
				<tr>
					<td colspan="10">
						<?php echo $this->pagination->getListFooter(); ?>
					</td>
				</tr>
			</tfoot>
-->
			<tbody>
			<?php
				$k = 0;
				for ($i=0, $n=count( $this->items ); $i < $n; $i++)
				{
					$row 	=& $this->items[$i];
	
					$img 	= $row->block ? 'cancel.png' : 'check.png';
					$status	= $row->block? 'disabled': 'enabled';
					$task 	= $row->block ? 'unblock' : 'block';
					$alt 	= $row->block ? JText::_( 'Enabled' ) : JText::_( 'Blocked' );
					$link 	= 'index.php?option=com_users&amp;view=user&amp;task=edit&amp;cid[]='. $row->id. '';
	
					if ($row->lastvisitDate == "0000-00-00 00:00:00") {
						$lvisit = JText::_( 'Never' );
					} else {
						//$lvisit	= JHTML::_('date', $row->lastvisitDate, '%Y-%m-%d %H:%M:%S');
						$lvisit		= date("m/d/y g:i A", strtotime($row->lastvisitDate));
					}
				?>
				<tr class="<?php echo "row$k $status"; ?>">
					<td align="center">
						<?php echo JHTML::_('grid.id', $i, $row->id ); ?>
					</td>
					<td align="center">
						<?php echo $row->id; ?>
					</td>
<!--
					<td>
						<?php echo $i+1+$this->pagination->limitstart;?>
					</td>
-->
					<td align="center">
						<a href="javascript:void(0);" onclick="return listItemTask('cb<?php echo $i;?>','<?php echo $task;?>')">
							<img src="/administrator/templates/azure/images/<?php echo $img;?>" width="16" height="16" border="0" alt="<?php echo $alt; ?>" /></a>
					</td>
					<td>
						<a href="<?php echo $link; ?>">
							<?php echo $row->name; ?></a>
					</td>
					<td>
						<?php echo $row->username; ?>
					</td>
<!--
					<td align="center">
						<?php echo $row->loggedin ? '<img src="images/tick.png" width="16" height="16" border="0" alt="" />': ''; ?>
					</td>
-->
					<td>
						<?php echo JText::_( $row->groupname ); ?>
					</td>
<!--
					<td>
						<a href="mailto:<?php echo $row->email; ?>">
							<?php echo $row->email; ?></a>
					</td>
-->
					<td nowrap="nowrap" align="center">
						<?php echo $lvisit; ?>
					</td>
				</tr>
				<?php
					$k = 1 - $k;
					}
				?>
			</tbody>
		</table>
	
		<input type="hidden" name="option" value="com_users" />
		<input type="hidden" name="task" value="" />
		<input type="hidden" name="boxchecked" value="0" />
		<input type="hidden" name="filter_order" value="<?php echo $this->lists['order']; ?>" />
		<input type="hidden" name="filter_order_Dir" value="<?php echo $this->lists['order_Dir']; ?>" />
		<?php echo JHTML::_( 'form.token' ); ?>
	</form>
</div>